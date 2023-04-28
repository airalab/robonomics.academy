<template>
  <div class="add-to-calendar">
    <button class="add-to-calendar__btn" @click.stop="$emit('closeCalendarBlob')"></button>
    <div class="add-to-calendar__input">
      <input ref="date" type="datetime-local" id="event-time"
       name="event-time"
       :min="min" v-model="dates">
    </div>
    <ul class="add-to-calendar__list">
      <li class="add-to-calendar__item">
        <g-image src="@/assets/images/apple-icon.svg" aria-hidden="true" alt="apple"/>
        <span class="add-to-calendar__text" @click.stop="createICS">Apple Calendar</span>
      </li>
      <li class="add-to-calendar__item">
        <g-image src="@/assets/images/google-icon.svg" aria-hidden="true" alt="google"/>
        <g-link @click.stop="$emit('closeCalendarBlob')" class="add-to-calendar__text"  :to="googleLink">Google (online)</g-link>
      </li>
      <li class="add-to-calendar__item">
        <g-image src="@/assets/images/outlook-icon.svg" aria-hidden="true" alt="outlook"/>
        <g-link @click.stop="$emit('closeCalendarBlob')" class="add-to-calendar__text" :to="outlookLink">Outlook (online)</g-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {


  props: {
    name: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      min: null,
      max: null,
      dates: '',
      timezone: '',
      dateWithoutTZ: ''
    }
  },

  watch: {
    'dates': function(curr, old) {
      const newDate = new Date(curr)
      const newDateWithoutTZ = newDate.toUTCString();
      this.dateWithoutTZ = new Date(newDateWithoutTZ).toISOString().slice(0,16);
      newDate.setHours(newDate.getHours() + 4);
      this.max = newDate.toISOString().slice(0,16);
    }
  },

  computed: {
    googleLink() {
      return `https://calendar.google.com/calendar/u/0/r/eventedit?dates=${this.dates && this.dates.replace(/[^a-zA-Z0-9]/g, '') + '00' }/${this.max && this.max.replace(/[^a-zA-Z0-9]/g, '') + '00'}&ctz=${this.timezone}&details=&location=&text=Robonomics academy reminder: ${encodeURIComponent(this.name)} (${this.type}) `
    },

    outlookLink() {
      return `https://outlook.live.com/calendar/0/deeplink/compose?body=&enddt=${this.max && encodeURIComponent(this.max  + ':00+00:00')}&location=&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=${this.dateWithoutTZ && encodeURIComponent(this.dateWithoutTZ + ':00+00:00')}&subject=${encodeURIComponent(`Robonomics academy reminder: ${this.name} (${this.type})`)}`

    }
  },

  methods: {

    checkTime() {
      const now = new Date();
      this.dateWithoutTZ = now.toISOString().slice(0,16);

      now.setHours(now.getHours() + 4);
      now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
      this.$refs.date.value = now.toISOString().slice(0,16);

      const tomorrow = new Date(now)
      tomorrow.setDate(tomorrow.getDate() + 1)

      this.dates = now.toISOString().slice(0,16);
      this.min = now.toISOString().slice(0,16);

      now.setHours(now.getHours() + 4);
      this.max = now.toISOString().slice(0,16);  
    },

    createICS(e) {
      let icsMSG = "BEGIN:VCALENDAR\n";
      icsMSG += "VERSION:2.0\n";
      icsMSG += "PRODID:-//Our Company//NONSGML v1.0//EN\r\n";
      icsMSG += "BEGIN:VEVENT\r\n";
      icsMSG += "CALSCALE:GREGORIAN\r\n";
      icsMSG += "METHOD:PUBLISH\r\n";
      icsMSG += "TZID:" + this.timezone + "\r\n";
      icsMSG += "X-LIC-LOCATION:" + this.timezone + "\r\n";
      icsMSG += "DTSTART;TZID=" + this.timezone + ':' + this.dates.replace(/[^a-zA-Z0-9]/g, '') + "00\r\n";
      icsMSG += `SUMMARY: Robonomics academy reminder: ${this.name} (${this.type}) \r\n`;
      icsMSG += "END:VEVENT\r\nEND:VCALENDAR";

      const title = "newEvent.ics";
      const uri = "data:text/calendar;charset=utf8," + escape(icsMSG);


      let link = document.createElement('a');
      link.href = uri;
      link.classList.add('temp')
      link.setAttribute('download', title);
      link.setAttribute('target', '_blank');

      document.body.append(link)
      document.querySelector('.temp').click();
      link.remove();

      this.$emit('closeCalendarBlob')
    },
  },

  mounted() {
    this.checkTime();
    this.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    document.body.addEventListener('click', (e) => {
      if (e.target !== document.querySelector('.add-to-calendar')) {
        e.stopPropagation();
        this.$emit('closeCalendarBlob')
      }
    })
  }


}
</script>

<style scoped>
  .add-to-calendar {
    position: absolute;
    top: -214px;
    right: 80px;
    width: 292px;
    height: 296px;
    padding: 2.5rem;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='258.004' height='267.754' viewBox='0 0 258.004 267.754'%3E%3Cpath id='Path_5460' data-name='Path 5460' d='M424.705,469.477c38.334,0,59.973-8.616,71.175-76.062S491.756,270.668,465.8,254.49,415.088,230.2,349.039,238.3s-94.356,16.189-94.356,111.958,38.334,106.558,54.846,110.6,72.216,7.7,72.216,7.7S389.826,469.344,424.705,469.477Z' transform='matrix(-0.087, -0.996, 0.996, -0.087, -189.115, 540.341)' fill='%234292e2' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: 100%;
    z-index: 5;
    cursor: auto;
  }

  .add-to-calendar__btn {
    position: absolute;
    top: 20px;
    right: 14px;
    width: 38px;
    height: 38px;
    padding: 0;
    color: var(--color-light);
    background-color: var(--color-text-bubble-btn);
    border: 3px solid var(--color-light);
    border-radius: 100%;
  }

  .add-to-calendar__btn::after,
  .add-to-calendar__btn::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 15px;
    height: 16px;
    width: 2px;
    background-color: var(--color-light);
  }


  .add-to-calendar__btn::before {
    transform: rotate(45deg);
  }

  .add-to-calendar__btn::after {
    transform: rotate(-45deg);
  }

  .add-to-calendar__btn:hover {
    background-color: var(--color-text-bubble-btn) !important;
    border: 3px solid var(--color-light) !important;
  }

  .add-to-calendar__list {
    list-style: none;
    padding-left: 5px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .add-to-calendar__item {
    display: flex;
    align-items: center;
  }

  .add-to-calendar__item:not(:last-child) {
    margin-bottom: calc(var(--gap) * 0.7);
  }

  .add-to-calendar__item img {
    display: inline-block;
    margin-right: 20px;
  }

  .add-to-calendar__text {
    font-weight: bold;
    font-size: calc(var(--font-size) * 0.8);
    color: var(--color-light);
    cursor: pointer;
  }

  .add-to-calendar__text:hover {
    color: var(--color-main);
  }

  .add-to-calendar__input {
    /* width: 90%; */
    width: 204px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: calc(var(--gap) * 0.3);
    /* padding: calc(var(--gap) * 0.5) calc(var(--gap) * 0.4); */
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='158.667' height='44.928' viewBox='0 0 158.667 44.928'%3E%3Cpath id='Path_5467' data-name='Path 5467' d='M365.06,277.993c24.886,0,45.418,2.153,46.206-13.914s-2.678-22.454-19.525-25.414-32.925-4.443-75.8-2.961-61.255,2.961-61.255,20.481,24.886,19.493,35.606,20.233,57.542,1.33,57.542,1.33S354.374,278.2,365.06,277.993Z' transform='translate(-253.683 -234.134)' fill='%23555a93' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: 100%;
    /* border: 3px solid var(--color-light);
    background-color: #555A93;
    border-radius: 103% 127% 97% 64% / 76% 60% 94% 72%; */
  }

  .add-to-calendar__input input {
    padding-left: 0.8rem;
    font-family: var(--font-text);
    font-weight: 600;
    color: var(--color-light);
    border: 1px solid transparent;
  }

  input[type="datetime-local"]::-webkit-calendar-picker-indicator {
    -webkit-appearance: none;
    appearance: none;
    color-scheme: dark;
    cursor: pointer;
  }

  @media screen and (max-width: 500px) {
    .add-to-calendar {
      top: -250px;
      right: unset;
    }
  }

</style>