interface PageHeaderProps {
  title: string;
  subTitle: string;
}

const PageHeader = ({ title, subTitle }: PageHeaderProps) => (
  <div className="bg-[#050B16] text-white pt-40 pb-20 px-6 text-center relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
    <div className="relative z-10">
      <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">{title}</h2>
      <div className="w-12 h-1 bg-[#D4A857] mx-auto mb-6"></div>
      <p className="text-slate-400 font-light max-w-2xl mx-auto">{subTitle}</p>
    </div>
  </div>
);

export default PageHeader;
