export default function TitleStep({title, description}) {
  return (
    <div className="flex flex-col gap-2">
        <h2 className="text-3xl text-marine-blue tracking-wider font-bold">
          {title}
        </h2>
        <p className="text-base text-cool-gray font-light">
          {description}
        </p>
      </div>
  )
}
