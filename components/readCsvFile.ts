export const readCsvFile = (file: Blob): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(reader.error);
    reader.onload = () => resolve((reader.result as string) || '');
    reader.readAsText(file);
  });
}

export const mapCSVToArray = (csv: string): string[][] => {
  return csv.split('\r\n').map((row) => row.split(','));
}
