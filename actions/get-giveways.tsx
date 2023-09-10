import { GiveWay } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/api`;

const getGiveways = async (id: string, idGiveway: string): Promise<GiveWay> => {

  const route = `${URL}/${id}/giveways/${idGiveway}`;
  
  const res = await fetch(route);
  return res.json();
};

export default getGiveways;