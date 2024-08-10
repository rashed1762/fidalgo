import './menuitem.css'

const MenuItem = ({item}) => {
  const {name,image,price,recipe}=item;
  return (
    

    <div className="flex space-x-6 max-w-screen-xl mx-auto   mr-8 p-4">
          <img style={{borderRadius: '0 10px 0px 10px'}} className="imgstyle" src={image} alt="" />
          <div>
            <h3 className='text-2xl font-jost mb-2 text-amber-200'>{name}</h3>
            <p className='font-1xl'>{recipe}</p>
          </div>
          <p className="text-yellow-500">${price}</p>
        
    </div>
  )
}

export default MenuItem;