import { useEffect, useRef } from 'react';
import { PlayCircle, X } from 'lucide-react';

interface VideoModalProps {
  onContinue: () => void;
}

export function VideoModal({ onContinue }: VideoModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    dialog?.showModal();
    return () => dialog?.close();
  }, []);

  return (
    <dialog
      ref={dialogRef}
      id="video-modal"
      aria-labelledby="video-modal-title"
      onCancel={(event) => {
        event.preventDefault();
        onContinue();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onContinue();
      }}
      className="fixed inset-0 m-auto w-[calc(100%-1rem)] max-w-3xl max-h-[90dvh] overflow-y-auto rounded-2xl sm:rounded-[28px] border-[3px] sm:border-[5px] border-[#0090D4] bg-white p-0 shadow-2xl backdrop:bg-white/70 backdrop:backdrop-blur-lg"
    >
      <div className="flex items-center gap-3 bg-[#0090D4] px-4 py-3 sm:px-5 sm:py-4 text-white">
        <PlayCircle className="h-6 w-6 shrink-0" />
        <h2 id="video-modal-title" className="flex-1 font-display font-black text-base sm:text-xl tracking-wide">
          Yuk, Tonton Video Ini!
        </h2>
        <button
          autoFocus
          aria-label="Tutup video dan lanjut pilih level"
          onClick={onContinue}
          className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white/20 hover:bg-white/30"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      <div className="p-3 sm:p-5">
        <div className="aspect-video overflow-hidden rounded-xl bg-slate-900">
          <iframe
            className="h-full w-full border-0"
            src="https://www.youtube-nocookie.com/embed/kW1BY8OQJYE?rel=0"
            title="Video pengantar Rute Kurir Roti Pintar"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <a
          href="https://youtu.be/kW1BY8OQJYE"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-sm text-[#074C83] underline"
        >
          Buka di YouTube
        </a>
      </div>
      <div className="border-t border-slate-100 px-3 pb-4 pt-3 sm:px-5">
        <button
          id="video-modal-continue-btn"
          onClick={onContinue}
          className="w-full cursor-pointer rounded-xl border-b-4 border-[#074C83] bg-[#0090D4] px-5 py-3 font-display font-bold tracking-wide text-white hover:bg-[#074C83] active:translate-y-1 active:border-b-0"
        >
          Lanjut Pilih Level
        </button>
      </div>
    </dialog>
  );
}
