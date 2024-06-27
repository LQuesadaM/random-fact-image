export const CatImage = ({ imageUrl }) => {
  return (
    <>
      {imageUrl && (
        <img src={imageUrl} alt='random cat image' className='cat-img' />
      )}
    </>
  )
}
