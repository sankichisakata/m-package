export default function Spinner({ color = "border-sub-color" }: { color?: string }) {
    return (
      <div className="
      fixed z-50 top-0 left-0 
      w-full h-full bg-white
      flex justify-center items-center
      ">
        <div className={`h-10 md:h-20 w-10 md:w-20 animate-spin rounded-full border-4 ${color} border-t-transparent`}></div>
      </div>
    );
  }
