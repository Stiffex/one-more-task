import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadData, removeItem} from "./Actions";

function App() {

  const data = useSelector(state => state.data);
  const loading = useSelector(state => state.loading)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  }, []);

  const handleDelete = (id) => {
      dispatch(removeItem(id));
  }

  return (
      <div className="App">
        {loading ? <div>Идёт загрузка, подождите, пожалуйста!🔄</div> : (
            data.map((item) => {
                return (
                    <div className="items">
                        <div>
                          <button onClick={() => handleDelete(item.id)} className="btn">&#10006;</button>
                        </div>
                        <div className="title">
                          {item.title}
                        </div>
                        <div className="picture">
                          <img src={item.thumbnailUrl} alt="pic"/>
                        </div>
                    </div>
                )
            })
        )}
      </div>
  );
}

export default App;
