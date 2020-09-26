import axios from "axios";

export async function getImagesUrls(
  query: string,
  per_page: number = 3,
  image_type: string = "photo"
) {
  const response = await axios
    .get(
      `https://pixabay.com/api/?key=` +
        process.env.NEXT_PUBLIC_IMAGES_API_KEY +
        `&q=` +
        query +
        `&image_type=` +
        image_type +
        `&per_page=` +
        per_page.toString()
    )
    .catch((err) => console.log(err));
  let hits = response ? response.data.hits : [];
  return hits.map((image: any) => image.webformatURL);
}
