import ItemList from "./ItemList";

const RestaurantCategories = ({data, showItems, toggleShowItems}) => {

    // const [showItems, setshowItems] = useState(false)

    const handleClick = () => {
        toggleShowItems();
    }

    return (
        <div className="items-center w-8/12 mx-auto my-5 py-3 px-3 bg-gray-100 rounded-lg shadow-lg">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold py-1">{data.title} ({data.itemCards?.length})</span>
                <span className="flex items-center">{showItems ? '🔽' : '🔼'}</span>   
            </div>
            <div>
                {showItems && <ItemList items={data.itemCards} />}
            </div>
        </div>

    );

    
};

export default RestaurantCategories