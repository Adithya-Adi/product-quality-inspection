import mongoose from "mongoose";

const { Schema } = mongoose;

const templateSchema = new Schema(
  {
    templateName: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    qcField: [{
      displayLabel: String,
      uom: String,
      expectedValue: Number,
      minimumTolerance: Number,
      maximumTolerance: Number,
    }],
  },
);

const TemplateModal = mongoose.model("Template", templateSchema);

export default TemplateModal;