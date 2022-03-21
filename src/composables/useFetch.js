import { ref, reactive } from "vue";
import axios from "axios";


//belirlienen API url'inden veri çekmek için composable 
const useFetch = () => {
  const data = ref([]);
  const loading = ref(true);
  const error = ref(null);

  const fetchData = async (url) => {
    loading.value = true;
    try {
      const response = await axios.get(url);
      if (response) {
        data.value = response.data;
        loading.value = false;
      } else {
        loading.value = false;
      }
    } catch (error) {
      error.value = error;
      loading.value = false;
    }
  };


  return { data, loading, error, fetchData };
};

export default useFetch;
