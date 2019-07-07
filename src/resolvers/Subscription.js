function newAppointmentSubscribe(parent, args, context, info) {
    return context.prisma.$subscribe.appointment({ mutation_in: ['CREATED'] }).node()
  }
  
const newAppointment = {
    subscribe: newAppointmentSubscribe,
    resolve: payload => {
      return payload
    },
}
  
module.exports = {
    newAppointment,
}