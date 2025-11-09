<script setup>
//import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div class="w-full overflow-x-auto">
    <table class="table">
      <thead>
        <tr>
          <th class="xl:hidden"></th>
          <th>ENABLED</th>
          <th>NO.</th>
          <th>BRAND</th>
          <th>MODEL</th>
          <th class="hidden md:table-cell">SV</th>
          <th class="hidden lg:table-cell">TV</th>
          <th class="hidden lg:table-cell">SIZE</th>
          <th class="hidden xl:table-cell">UPDATE AT</th>
          <th class="hidden xl:table-cell">ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        <tr class="row-hover">
          <td class="xl:hidden">
            <span class="icon-[tabler--chevron-right] size-5"></span>
            <!-- <span class="icon-[tabler--chevron-down] size-5"></span> -->
          </td>
          <td>
            <input type="checkbox" class="switch switch-success" id="switchSuccess1" checked />
          </td>
          <td>9999</td>
          <td>B phone</td>
          <td>B 17</td>
          <td class="hidden md:table-cell">V1.1</td>
          <td class="hidden lg:table-cell">v2.0</td>
          <td class="hidden lg:table-cell">100 MB</td>
          <td class="hidden xl:table-cell">2025-11-02 11:30:00</td>
          <td class="hidden xl:table-cell">
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
              <span class="icon-[tabler--pencil] size-5"></span>
            </button>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
              <span class="icon-[tabler--trash] size-5"></span>
            </button>
          </td>
        </tr>
        <tr>
          <td colspan="4" class="xl:hidden">
            <ul>
              <li class="md:hidden"><span class="font-medium tracking-wider">SV:</span> V1.1</li>
              <li class="lg:hidden"><span class="font-medium tracking-wider">TV:</span> V2.0</li>
              <li class="lg:hidden">
                <span class="font-medium tracking-wider">SIZE:</span> 100 MB
              </li>
              <li class="xl:hidden">
                <span class="font-medium tracking-wider">UPDATE AT:</span> 2025-11-02 11:30:00
              </li>
              <li class="xl:hidden">
                <span class="font-medium tracking-wider">ACTIONS:</span>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[tabler--pencil] size-5"></span>
                </button>
                <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                  <span class="icon-[tabler--trash] size-5"></span>
                </button>
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
