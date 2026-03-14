const GradientButton = ({text, style, className, link=""}) => {
  return (
    <>
     <a href={link} className={`${style} ${className} uppercase font-heading border-2 border-transparent
     min-w-[205px] h-auto px-12 py-6 lg:py-3 text-center rounded-full `}>{text}</a>
    </>
)
}
export default GradientButton