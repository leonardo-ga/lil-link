// Minimal shims so Supabase Storage's .d.ts stops complaining,
// without pulling full Node types that break Angular builds.

declare class Buffer {
  static from(data: any, encoding?: string): Buffer;
}

declare namespace NodeJS {
    interface ReadableStream { }
}