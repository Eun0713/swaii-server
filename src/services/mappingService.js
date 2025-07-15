import supabase from "../libs/supabaseClient.js";

export const saveMapping = async (mapping) => {
  const { error } = await supabase.from("gesture_mappings").insert([mapping]);

  if (error) {
    throw new Error(error.message);
  }
};
