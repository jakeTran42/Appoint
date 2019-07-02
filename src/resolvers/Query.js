function feed(parent, args, context, info) {
    return context.prisma.appointments()
}

module.exports = {
    feed,
}