import { ref } from "vue";

//API'den gelecek poster urlini kontrol eden composable eğer değer nullsa placeholder döndürür
export default function usePosterPath() {
  const posterPath = ref(null);
  const baseUrl = ref("https://image.tmdb.org/t/p/w500");

  const getPosterPath = (posterPath) => {
    if (posterPath) {
      return `${baseUrl.value}${posterPath}`;
    } else {
      return "https://via.placeholder.com/500x750";
    }
  };

  return { posterPath, baseUrl, getPosterPath };
}
