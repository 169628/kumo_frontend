<script setup></script>
<template>
  <div
    id="basic-modal"
    class="overlay modal overlay-open:opacity-100 hidden overlay-open:duration-300"
    role="dialog"
    tabindex="-1"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title">Create Campaign</h3>
          <button
            type="button"
            class="btn btn-text btn-circle btn-sm absolute end-3 top-3"
            aria-label="Close"
            data-overlay="#basic-modal"
          >
            <span class="icon-[tabler--x] size-4"></span>
          </button>
        </div>
        <div class="modal-body pt-6">
          <div class="select-floating w-96 mb-6">
            <select class="select" aria-label="Select floating label" id="selectFloating">
              <option>B phone</option>
              <option>Some song</option>
              <option>Oppa</option>
            </select>
            <label class="select-floating-label" for="selectFloating">BRAND</label>
          </div>
          <div class="select-floating max-w-sm mb-6">
            <select class="select is-invalid" id="selectStateErrorFloating">
              <option>B 17</option>
              <option>Feld</option>
              <option>Fine pro</option>
            </select>
            <label class="select-floating-label" for="selectStateErrorFloating">MODEL</label>
            <span class="helper-text ps-3">Helper text</span>
          </div>
          <div class="select-floating w-96 mb-6">
            <select class="select" aria-label="Select floating label" id="selectFloating">
              <option>V1.0</option>
              <option>V1.1</option>
              <option>V1.2</option>
            </select>
            <label class="select-floating-label" for="selectFloating">SV</label>
          </div>
          <div class="select-floating w-96 mb-6">
            <select class="select" aria-label="Select floating label" id="selectFloating">
              <option>V1.0</option>
              <option>V1.1</option>
              <option>V1.2</option>
            </select>
            <label class="select-floating-label" for="selectFloating">TV</label>
          </div>
          <div class="max-w-sm mb-6">
            <label class="label-text" for="fileInputLabel">Upload File</label>
            <input type="file" class="input" id="fileInputLabel" />
          </div>
          <div class="flex items-center gap-1 mb-4">
            <input type="checkbox" class="switch switch-info" id="switchInfo1" checked />
            <label class="label-text text-base" for="switchInfo1">TEST MODE</label>
          </div>
          <div class="mb-6">
            <p class="mb-4">
              Test Devices SN:
              <span class="text-base-content font-medium">(Maximum 3)</span>
            </p>
            <div id="wrapper-remove-for-copy-target" class="max-w-sm space-y-3">
              <div id="content-remove-for-copy-target" class="flex items-center gap-2">
                <input type="text" class="input" placeholder="Enter Device SN" />
                <button
                  class="btn btn-square btn-outline btn-info"
                  aria-label="delete button"
                  data-copy-markup-delete-item
                >
                  <span class="icon-[tabler--x]"></span>
                </button>
              </div>
            </div>
            <div class="flex max-w-sm justify-end gap-2 mt-4">
              <button
                type="button"
                data-copy-markup='{
    "targetSelector": "#content-remove-for-copy-target",
    "wrapperSelector": "#wrapper-remove-for-copy-target",
    "limit": 3
    }'
                id="copy-content-rem-btn"
                class="btn btn-sm btn-primary"
              >
                <span class="icon-[tabler--plus]"></span>
                ADD DEVICE
              </button>
            </div>
          </div>
          <div class="flex mb-6">
            <label class="label-text text-base">Download By: </label>
            <div class="join drop-shadow">
              <input
                class="join-item btn btn-soft"
                type="radio"
                name="radio-15"
                aria-label="Wifi"
                checked
              />
              <input
                class="join-item btn btn-soft"
                type="radio"
                name="radio-15"
                aria-label="User"
              />
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-soft" data-overlay="#basic-modal" aria-label="Close">
            Cancel
          </button>
          <button type="button" class="btn btn-primary">Create</button>
        </div>
      </div>
    </div>
  </div>
  <button
    type="button"
    class="btn btn-success"
    aria-haspopup="dialog"
    aria-expanded="false"
    aria-controls="basic-modal"
    data-overlay="#basic-modal"
  >
    Create New
  </button>
</template>
