import { Router, type IRouter } from 'express';
import { z } from 'zod';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { findUserByEmail, addUser, updateUser, getUsers } from '../services/userStore.js';
import { randomUUID } from 'node:crypto';

const router: IRouter = Router();
const JWT_SECRET = process.env.SESSION_SECRET || 'ola-arabic-secret-2025';

export const SECURITY_QUESTIONS = [
  'ما اسم مدرستك الأولى؟',
  'ما اسم حيوانك المفضل؟',
  'ما اسم مدينتك التي وُلدت فيها؟',
  'ما اسم أفضل صديق في طفولتك؟',
];

// Register
router.post('/register', async (req, res): Promise<void> => {
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().min(1),
    securityQuestion: z.string(),
    securityAnswer: z.string().min(1),
  });
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) { res.status(400).json({ error: 'بيانات غير صحيحة' }); return; }
  const { email, password, name, securityQuestion, securityAnswer } = parsed.data;
  if (findUserByEmail(email)) { res.status(409).json({ error: 'البريد الإلكتروني مستخدم مسبقاً' }); return; }
  const passwordHash = await bcrypt.hash(password, 10);
  const securityAnswerHash = await bcrypt.hash(securityAnswer.toLowerCase().trim(), 10);
  addUser({ id: randomUUID(), email, passwordHash, name, securityQuestion, securityAnswerHash, createdAt: new Date().toISOString() });
  res.json({ message: 'تم التسجيل بنجاح' });
});

// Login
router.post('/login', async (req, res): Promise<void> => {
  const schema = z.object({ email: z.string().email(), password: z.string() });
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) { res.status(400).json({ error: 'بيانات غير صحيحة' }); return; }
  const user = findUserByEmail(parsed.data.email);
  if (!user) { res.status(401).json({ error: 'بريد إلكتروني أو كلمة مرور خاطئة' }); return; }
  const valid = await bcrypt.compare(parsed.data.password, user.passwordHash);
  if (!valid) { res.status(401).json({ error: 'بريد إلكتروني أو كلمة مرور خاطئة' }); return; }
  const token = jwt.sign({ id: user.id, email: user.email, name: user.name }, JWT_SECRET, { expiresIn: '30d' });
  res.json({ token, user: { id: user.id, email: user.email, name: user.name } });
});

// Get security question for forgot-password flow
router.post('/forgot-password/question', async (req, res): Promise<void> => {
  const schema = z.object({ email: z.string().email() });
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) { res.status(400).json({ error: 'بريد غير صحيح' }); return; }
  const user = findUserByEmail(parsed.data.email);
  if (!user) { res.status(404).json({ error: 'لم يُعثر على هذا البريد الإلكتروني' }); return; }
  res.json({ securityQuestion: user.securityQuestion });
});

// Verify security answer and reset password
router.post('/forgot-password/reset', async (req, res): Promise<void> => {
  const schema = z.object({
    email: z.string().email(),
    securityAnswer: z.string(),
    newPassword: z.string().min(6),
  });
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) { res.status(400).json({ error: 'بيانات غير صحيحة' }); return; }
  const { email, securityAnswer, newPassword } = parsed.data;
  const user = findUserByEmail(email);
  if (!user) { res.status(404).json({ error: 'لم يُعثر على هذا البريد الإلكتروني' }); return; }
  const valid = await bcrypt.compare(securityAnswer.toLowerCase().trim(), user.securityAnswerHash);
  if (!valid) { res.status(401).json({ error: 'إجابة السؤال الأمني خاطئة' }); return; }
  const passwordHash = await bcrypt.hash(newPassword, 10);
  updateUser(user.id, { passwordHash });
  res.json({ message: 'تم تغيير كلمة المرور بنجاح' });
});

// Get current user (JWT-protected)
router.get('/me', async (req, res): Promise<void> => {
  const auth = req.headers['authorization'];
  if (!auth?.startsWith('Bearer ')) { res.status(401).json({ error: 'غير مصرح' }); return; }
  try {
    const payload = jwt.verify(auth.slice(7), JWT_SECRET) as { id: string; email: string; name: string };
    const user = getUsers().find(u => u.id === payload.id);
    if (!user) { res.status(404).json({ error: 'المستخدم غير موجود' }); return; }
    res.json({ id: user.id, email: user.email, name: user.name });
  } catch {
    res.status(401).json({ error: 'جلسة منتهية، يرجى تسجيل الدخول مجدداً' });
  }
});

export { router as authRouter };
