export default function BouncingBalls() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="bounce-delay-1 absolute top-5 left-5 size-16 rounded-full bg-white/20 blur-xs md:left-10 md:size-20"></div>
      <div className="bounce-delay-3 absolute top-10 left-1/4 size-12 rounded-full bg-white/20 blur-xs md:left-1/3 md:size-16"></div>
      <div className="bounce-delay-2 absolute top-0 right-10 size-20 rounded-full bg-white/20 blur-xs md:right-20 md:size-28"></div>

      <div className="bounce-delay-4 absolute top-1/3 left-5 size-16 rounded-full bg-white/15 blur-xs md:left-20 md:size-24"></div>
      <div className="bounce-delay-1 absolute top-1/2 left-1/2 size-14 rounded-full bg-white/15 blur-xs md:left-2/3 md:size-20"></div>
      <div className="bounce-delay-5 absolute top-2/3 right-1/4 size-12 rounded-full bg-white/20 blur-xs md:right-1/3 md:size-16"></div>

      <div className="bounce-delay-2 absolute bottom-10 left-10 size-20 rounded-full bg-white/15 blur-xs md:left-1/4 md:size-28"></div>
      <div className="bounce-delay-3 absolute right-10 bottom-5 size-16 rounded-full bg-white/20 blur-xs md:right-1/4 md:size-24"></div>
    </div>
  );
}
