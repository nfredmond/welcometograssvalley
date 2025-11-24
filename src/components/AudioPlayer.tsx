type AudioPlayerProps = {
  title: string;
  audioUrl?: string | null;
};

export function AudioPlayer({ title, audioUrl }: AudioPlayerProps) {
  if (!audioUrl) {
    return (
      <div className="panel p-6 text-sm text-[#285e4b]">
        Audio coming soon. We&apos;re lining up the feed from Buzzsprout.
      </div>
    );
  }

  return (
    <div className="panel flex flex-col gap-4 p-6">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-[#6dac87]">
          Listen
        </p>
        <p className="text-lg font-semibold text-[#184739]">{title}</p>
      </div>
      <audio
        className="w-full rounded-2xl border border-[#cfe3d3] bg-[#eef8f2] p-2"
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

