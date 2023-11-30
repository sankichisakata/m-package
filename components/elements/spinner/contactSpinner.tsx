export default function ContactSpinner({ color = "border-blue-700" }: { color?: string }) {
    return (
      <div className="w-full h-full bg-gray-500/30">
        <div className={`h-10 md:h-20 w-10 md:w-20 animate-spin rounded-full border-4 ${color} border-t-transparent`}></div>
      </div>
    );
  }