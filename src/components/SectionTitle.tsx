const SectionTitle = ({ name }: { name: string }) => {
  return (
    <div className="relative mb-12 flex items-center">
      {/* Background Ghost Text */}
      <span className="absolute left-0 text-7xl md:text-8xl font-black text-gray-100 uppercase tracking-widest select-none -z-10">
        {name}
      </span>
      {/* Foreground Main Title */}
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 uppercase tracking-wider relative ml-1">
        {name}
      </h2>
    </div>
  );
};

export default SectionTitle;