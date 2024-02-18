import { FaShoppingBag } from "react-icons/fa";
import treading1 from "/src/images/trending-01.jpg"
import treading2 from "/src/images/trending-02.jpg"
import treading3 from "/src/images/trending-03.jpg"
import treading4 from "/src/images/trending-04.jpg"
const TrendingInfo = [
  {
    img: (treading1),
    h4: "Action",
    h3: "Assasin Creed",
    icon: <FaShoppingBag />,
    price: '20',
    discount: '28',
    id: '1',
    category:"advanced",
  },
  {
    img: (treading2),
    h4: "Action",
    h3: "Assasin Creed",
    icon: <FaShoppingBag />,
    price: '20',
    id: '2',
    category:"advanced",
  },
  {
    img: (treading3),
    h4: "Action",
    h3: "Assasin Creed",
    icon: <FaShoppingBag />,
    price: '44',
    discount: '64',
    id: '3',
    category:"racing",

  },  
  {
    img: (treading4),
    h4: "Action",
    h3: "Assasin Creed",
    icon: <FaShoppingBag />,
    price: '32',
    id: '4',
    category:"strategy",
  },
]
export default TrendingInfo