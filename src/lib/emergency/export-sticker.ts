export async function exportStickerAsPng(element: HTMLElement, filename = 'apex_emergencia_sticker.png') {
  const html2canvas = (await import('html2canvas')).default;
  const canvas = await html2canvas(element, { backgroundColor: '#ffffff', scale: 3 });
  const a = document.createElement('a');
  a.href = canvas.toDataURL('image/png');
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
}
