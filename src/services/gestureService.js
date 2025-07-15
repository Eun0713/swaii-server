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

export const getGesturesByEmail = async (email) => {
  const { data, error } = await supabase
    .from("gestures")
    .select("gesture_data, created_at")
    .eq("email", email);

  if (error) {
    throw new Error(error.message);
  }

  return data.map((item) => ({
    ...item.gesture_data,
    created_at: item.created_at,
  }));
};

export const deleteGesture = async (email, gestureName) => {
  const { error } = await supabase
    .from("gestures")
    .delete()
    .filter("gesture_data->>name", "eq", gestureName)
    .eq("email", email);

  if (error) {
    throw new Error(error.message);
  }
};
