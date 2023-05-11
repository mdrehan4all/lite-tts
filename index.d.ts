declare module 'liteTTS' {
  const liteTTS: LiteTTSJS.LiteTTS;

  namespace LiteTTSJS {
    type errorCallback = (err: string) => void;

    class LiteTTS {
      public export(text: string, voice?: string, speed?: number, filePath?: string, callback?: errorCallback): void;
      public speak(text: string, voice?: string, speed?: number, callback?: errorCallback): void;
      public stop(): void;
      public getInstalledVoices(callback: errorCallback): void;
    }
  }

  export = liteTTS;
}