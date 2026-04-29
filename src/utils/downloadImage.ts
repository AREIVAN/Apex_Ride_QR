import { toPng } from 'html-to-image';

export async function downloadElementAsPng(element: HTMLElement | null, filename: string): Promise<void> {
  if (!element) throw new Error('Element is not available for export.');

  const dataUrl = await toPng(element, {
    cacheBust: true,
    pixelRatio: 3,
    backgroundColor: '#ffffff',
  });

  const link = document.createElement('a');
  link.download = filename;
  link.href = dataUrl;
  link.click();
}
