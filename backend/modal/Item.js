import mongoose from "mongoose";

const { Schema } = mongoose;

const itemSchema = new Schema(
  {
    productPlanNo: {
      type: String,
      // required: true
    },
    custPoNo: {
      type: String,
      // required: true
    },
    salesOrderNo: {
      type: String,
      // required: true
    },
    itemNo: {
      type: String,
      // required: true
    },
    drawingNo: {
      type: String,
      // required: true
    },
    template: {
      type: Schema.Types.ObjectId,
      ref: "Template",
    },
    assemblyNo: {
      type: String,
      // required: true
    },
    serialNo: {
      type: String,
      // required: true
    },
    bcdRef: {
      type: String,
      // required: true
    },
    bcdOrderNo: {
      type: String,
      // required: true
    },
    customerPhone: {
      type: String,
      // required: true
    },
    inspectedDate: {
      type: Date,
      // required: true
    },
    orderDueDate: {
      type: String,
      // required: true
    },
    salesOrder: {
      type: String,
      // required: true
    },
    shellMaterial: {
      type: String,
      // required: true
    },
    tagNo: {
      type: String,
      // required: true
    },
    shippedDate: {
      type: String,
      // required: true
    },
    inspectorComment: {
      type: String,
      // required: true
    },
    qcReading: {
      type: Array,
    },
    qcStatus: {
      type: String,
    },
    rejectComment: {
      type: String,
    }
  },
);

const ItemModal = mongoose.model("Item", itemSchema);

export default ItemModal;