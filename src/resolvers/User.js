function appointments(parent, args, context) {
    return context.prisma.user({ id: parent.id }).appointments()
}

module.exports = {
    appointments,
}