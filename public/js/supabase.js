// File: js/supabase.js

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://egwlrumplznbnmwwddyx.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVnd2xydW1wbHpuYm5td3dkZHl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkxMzYzNTUsImV4cCI6MjA2NDcxMjM1NX0.LeqhmFp9DNra11vyBnEEpHtoDqrA3NS_Nf9St-Kj83o';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);