

type ImageCardProps = {
  link: string,
  image: string,
  desc: string,
  border?: boolean
}

function ImageCard(obj: ImageCardProps) {
  return (
    <a className="h-48 sm:h-auto self-center sm:flex-1
                  transform-gpu hover:z-10 transition sm:hover:translate-x-0 duration-300 hover:scale-105 sm:hover:scale-125 xl:hover:scale-150"
        href={obj.link}
    >
      <img className={"rounded-lg w-full hover:border-2 shadow-it " + (obj.border === true ? "border-2 border-white" : "")} src={obj.image} alt={obj.desc} />
    </a>
  )
}

export default ImageCard