function appointmentFeed(parent, args, context, info) {
    return context.prisma.appointments()
}

module.exports = {
    appointmentFeed,
}