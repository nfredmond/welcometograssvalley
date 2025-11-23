type AudioPlayerProps = {
  title: string;
  audioUrl?: string | null;
};

export function AudioPlayer({ title, audioUrl }: AudioPlayerProps) {
  if (!audioUrl) {
    return (
      <div className="panel p-6 text-sm text-[#5e4a3f]">
        Audio coming soon. We&apos;re lining up the feed from Buzzsprout.
      </div>
    );
  }

  return (
    <div className="panel flex flex-col gap-4 p-6">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-[#b88658]">
          Listen
        </p>
        <p className="text-lg font-semibold text-[#3d2a22]">{title}</p>
      </div>
      <audio
        className="w-full rounded-2xl border border-[#d8c9b8] bg-[#f8f3ed] p-2"
        controls
        preload="none"
        src={audioUrl}
      >
        Your browser does not support HTML5 audio.{" "}
        <a href={audioUrl}>Download episode</a>.
      </audio>
    </div>
  );
}

