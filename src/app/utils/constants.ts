export class Constants {
    public static Tabs = [
        { id: 'OVERVIEW', text: 'Overview' },
        { id: 'BOOKINGS', text: 'Bookings' },
        { id: 'INVOICES', text: 'Invoices' },
      ];

      public static BookingStepsGas = [
        {"text":"Boiler", "value":"Boiler", "checked":false},
        {"text":"Radiator", "value":"Radiator", "checked":false},
        {"text":"Hot Water", "value":"HotWater", "checked":false},
        {"text":"Pipework", "value":"Pipework", "checked":false},
        {"text":"Thermostat", "value":"Thermostat", "checked":false},
        {"text":"Time Clock", "value":"TimeClock", "checked":false}
      ]

      public static BookingStepsPower = [
        {"text":"power1", "value":"power1", "checked":false},
        {"text":"power2", "value":"power2", "checked":false}
      ]
      public static BookingStepsOther = [
        {"text":"other1", "value":"other1", "checked":false},
        {"text":"other2", "value":"other2", "checked":false}
      ]
}