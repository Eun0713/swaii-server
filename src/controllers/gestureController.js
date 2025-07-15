import {
  saveGesture,
  getGesturesByEmail,
  deleteGesture,
} from "../services/gestureService.js";
import { HTTP_STATUS } from "../constants/httpStatus.js";
import { MESSAGES } from "../constants/messages.js";

export const saveGestureController = async (req, res) => {
  const { email, gesture } = req.body;

  if (!email || !gesture) {
    return res
      .status(HTTP_STATUS.BAD_REQUEST)
      .json({ message: MESSAGES.MISSING_DATA });
  }

  try {
    const savedGesture = await saveGesture(email, gesture);
    res.status(HTTP_STATUS.CREATED).json({
      message: MESSAGES.GESTURE_SAVE_SUCCESS,
      data: savedGesture,
    });
  } catch (error) {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      message: MESSAGES.GESTURE_SAVE_FAIL,
      error: error.message,
    });
  }
};

export const getGesturesController = async (req, res) => {
  const { email } = req.query;

  if (!email) {
    return res
      .status(HTTP_STATUS.BAD_REQUEST)
      .json({ message: MESSAGES.MISSING_DATA });
  }

  try {
    const gestures = await getGesturesByEmail(email);
    res
      .status(HTTP_STATUS.OK)
      .json({ message: MESSAGES.GESTURE_FETCH_SUCCESS, data: gestures });
  } catch (error) {
    res
      .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
      .json({ message: MESSAGES.GESTURE_FETCH_FAIL, error: error.message });
  }
};

export const deleteGestureController = async (req, res) => {
  const { email, gestureName } = req.body;

  if (!email || !gestureName) {
    return res
      .status(HTTP_STATUS.BAD_REQUEST)
      .json({ message: MESSAGES.INVALID_REQUEST });
  }

  try {
    await deleteGesture(email, gestureName);
    res.status(HTTP_STATUS.OK).json({ message: MESSAGES.DELETE_SUCCESS });
  } catch (error) {
    res
      .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
      .json({ message: MESSAGES.DELETE_FAIL });
  }
};
