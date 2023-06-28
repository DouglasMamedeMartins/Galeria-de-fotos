import { Photo } from '@/types/Photo'

type PhotoItemProps = {
  photo: Photo
  onClick: () => void
}

export const PhotoItem = ({ photo, onClick }: PhotoItemProps) => {
  return (
    <div onClick={onClick} className="cursor-pointer hover:opacity-80">
      <img src={`/assets/${photo.url}`} alt="" className="w-full" />
    </div>
  )
}
