import supabase from "../libs/supabaseClient.js";

export const saveMapping = async (mapping) => {
  const { error } = await supabase.from("gesture_mappings").insert([mapping]);

  if (error) {
    throw new Error(error.message);
  }
};

export const getMappingsByEmail = async (email) => {
  const { data, error } = await supabase
    .from("gesture_mappings")
    .select("*")
    .eq("email", email);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const deleteMapping = async (email, site, gesture, action) => {
  const { error } = await supabase
    .from("gesture_mappings")
    .delete()
    .match({ email, site, gesture, action });

  if (error) {
    throw new Error(error.message);
  }
};

export const updateMapping = async ({
  email,
  site,
  gesture,
  action,
  updated,
}) => {
  const updateData = { ...updated };

  if (updated.gesture) {
    const { data, error } = await supabase
      .from("gestures")
      .select("points")
      .eq("email", email)
      .eq("name", updated.gesture)
      .single();

    if (error || !data) {
      throw new Error("GESTURE_NOT_FOUND");
    }

    updateData.points = data.points;
  }

  const { error } = await supabase
    .from("gesture_mappings")
    .update(updateData)
    .match({ email, site, gesture, action });

  if (error) {
    throw new Error(error.message);
  }
};
