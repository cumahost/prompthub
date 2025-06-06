// File: js/prompt-builder.js

// Versi awal builder sederhana (hanya untuk prompt artikel)

export function generateArticlePrompt(formData) {
  const { topik, audiens, gaya, tujuan, panjang } = formData;

  let prompt = `Tulis artikel tentang ${topik}.`;
  if (audiens) prompt += ` Target pembacanya adalah ${audiens}.`;
  if (gaya) prompt += ` Gunakan gaya penulisan ${gaya}.`;
  if (tujuan) prompt += ` Tujuan artikel ini adalah ${tujuan}.`;
  if (panjang) prompt += ` Panjang artikel sekitar ${panjang}.`;

  return prompt;
}


// Nanti bisa tambah fungsi generate untuk kategori prompt lain

import { supabase } from './supabase.js';

document.getElementById('saveBtn')?.addEventListener('click', async () => {
  const promptText = document.querySelector('#preview-area')?.innerText?.trim();
  if (!promptText) return alert('Prompt belum dibuat!');

  // ambil user
  const { data: sessionData, error: sessionError } = await supabase.auth.getUser();
  if (!sessionData?.user) return alert('User belum login!');

  const meta = {
    topik: form.querySelector('input[placeholder*="Topik"]')?.value,
    audiens: form.querySelector('input[placeholder*="Audiens"]')?.value,
    gaya: form.querySelector('input[placeholder*="Gaya"]')?.value,
    tujuan: form.querySelector('textarea')?.value,
    panjang: form.querySelector('input[placeholder*="700 kata"]')?.value,
  };

  const { error } = await supabase.from('prompts').insert({
    user_id: sessionData.user.id,
    jenis: 'artikel',
    isi: promptText,
    meta
  });

  if (error) {
    alert('❌ Gagal simpan: ' + error.message);
  } else {
    document.getElementById('saveMsg')?.classList.remove('hidden');
  }
});
