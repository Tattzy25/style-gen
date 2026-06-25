// models.js
// Single source of truth for all generation models.
// The Styles Generator reads from this file: the dropdown shows `label`,
// and each model's `maxInputs` / `maxOutputs` drive what the user can pick.
//
// FIELDS
//   id         unique model id (string)
//   label      name shown in the dropdown
//   maxInputs  how many source images this model accepts (>=1)
//   maxOutputs how many results this model can generate in one run
//              -> caps how many styles (or prompt variations) the user can select
//   description optional, short note (not required)
//
// Add / edit / remove models here — the dropdown, the selection cap, and the
// input/output counters all update automatically.

window.GENERATION_MODELS = [
  {
    id: "tattty-core",
    label: "TaTTTy Core",
    maxInputs: 1,
    maxOutputs: 12,
    description: "Balanced photo-to-art engine.",
  },
  // Examples — uncomment / edit / add your own:
  // {
  //   id: "tattty-lite",
  //   label: "TaTTTy Lite",
  //   maxInputs: 1,
  //   maxOutputs: 4,
  //   description: "Faster, fewer outputs.",
  // },
  // {
  //   id: "tattty-pro",
  //   label: "TaTTTy Pro",
  //   maxInputs: 3,
  //   maxOutputs: 10,
  //   description: "Multi-image, high fidelity.",
  // },
];

window.findGenerationModel = function (id) {
  return (window.GENERATION_MODELS || []).find(function (m) {
    return m.id === id;
  });
};
