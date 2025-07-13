import supabase from "../libs/supabaseClient.js";

export const saveGesture = async (email, gesture) => {
  const { data, error } = await supabase
    .from("gestures")
    .insert([{ email, gesture_data: gesture }]);

  if (error) {
    throw new Error("제스처 저장 실패: ", error);
  }

  return data;
};
