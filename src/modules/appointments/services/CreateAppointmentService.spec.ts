import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

/**
 * it - Isso, isto
 * should - Deve
 * it should => Isso deve...
 * it should be able => Isto deve ser permitido criar...
 */

describe('CreateAppointment', () => {
  it('should be able to create a new appoitment', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );

    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '123123123',
    });

    expect(appointment).toHaveProperty('id');
  });

  // it('should not be able to create two appoitments on the same time', () => {
  //   expect(1 + 2).toBe(3);
  // });
});
