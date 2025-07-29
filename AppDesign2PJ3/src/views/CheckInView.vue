<script setup>
import { ref, computed } from 'vue';

const activeTab = ref('booking-id');

// Booking ID tab fields
const bookingId = ref('');
const passengerNameBooking = ref('');

// Ticket Number tab fields
const ticketNumber = ref('');
const passengerNameTicket = ref('');

import { useRouter } from 'vue-router';
const router = useRouter();

const goToNextStep = () => {
  router.push('/prohibited-items');
};

const isCheckInEnabled = computed(() => {
  if (activeTab.value === 'booking-id') {
    return bookingId.value.trim() !== '' && passengerNameBooking.value.trim() !== '';
  } else {
    return ticketNumber.value.trim() !== '' && passengerNameTicket.value.trim() !== '';
  }
});
</script>

<template>
    <div class="check-in-page">
        <div class="page-title-chip">Check-in</div>

        <div 
            class="trip-type-tabs"
            :class="{ 'ticket-number-active': activeTab === 'ticket-number' }"
        >
            <button 
                class="tab-button" 
                :class="{ active: activeTab === 'booking-id' }" 
                @click="activeTab = 'booking-id'"
            >
            Booking ID
            </button>
            <button 
                class="tab-button" 
                :class="{ active: activeTab === 'ticket-number' }" 
                @click="activeTab = 'ticket-number'"
            >
            Ticket Number
            </button>
            <div class="glider"></div>
        </div>

        <!-- Check-in Form -->
        <div class="check-in-form">
            <div v-if="activeTab === 'booking-id'" class="form-inputs">
                <div class="input-group">
                    <label for="booking-id">Booking ID</label>
                    <input id="booking-id" type="text" v-model="bookingId" placeholder="e.g., R4T81C">
                </div>
                <div class="input-group">
                    <label for="passenger-name-booking">Passenger Name</label>
                    <input id="passenger-name-booking" type="text" v-model="passengerNameBooking" placeholder="Enter passenger name">
                </div>
            </div>

            <div v-if="activeTab === 'ticket-number'" class="form-inputs">
                 <div class="input-group">
                    <label for="ticket-number">Ticket Number</label>
                    <input id="ticket-number" type="text" v-model="ticketNumber" placeholder="e.g., 1234567890">
                </div>
                <div class="input-group">
                    <label for="passenger-name-ticket">Passenger Name</label>
                    <input id="passenger-name-ticket" type="text" v-model="passengerNameTicket" placeholder="Enter passenger name">
                </div>
            </div>
        </div>

       <button 
          class="check-in-button" 
          :class="{ active: isCheckInEnabled }"
          :disabled="!isCheckInEnabled"
          @click="goToNextStep"
        >
          Check-in
        </button>
    </div>
</template>

<style scoped>
.page-title-chip {
  display: inline-block;
  background-color: #e0e0e0;
  padding: 0.25rem 1rem;
  border-radius: 1rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
}
.check-in-form {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
.trip-type-tabs {
  display: flex;
  position: relative;
  background-color: #e0e0e0;
  border-radius: 0.75rem;
  padding: 0.25rem;
  margin-bottom: 2rem;
}
.tab-button {
  flex: 1;
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 0.5rem;
  background-color: transparent; 
  color: #666;
  transition: color 0.3s ease-in-out; 
  z-index: 1; 
  position: relative;
  cursor: pointer;
}
.tab-button.active {
  color: white;
}
.glider {
  position: absolute;
  top: 0.25rem;
  left: 0.25rem;
  height: calc(100% - 0.5rem); 
  width: calc(50% - 0.25rem);  
  background-color: var(--secondary-color, #E69D00);
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s ease-in-out;
}
.trip-type-tabs.ticket-number-active .glider {
  transform: translateX(100%);
}

.form-inputs {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.input-group {
  display: flex;
  flex-direction: column;
}
.input-group label {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
}
.input-group input {
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 0.5rem 0;
  font-size: 1.1rem;
}
.input-group input:focus {
  outline: none;
  border-bottom-color: var(--primary-color, #005d6a);
}
.check-in-button {
  width: 100%;
  background-color: #6c757d; /* Disabled color */
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 1rem;
  border: none;
  border-radius: 2rem;
  margin-top: 2rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.check-in-button.active {
    background-color: #015878; /* Enabled color */
}
</style>