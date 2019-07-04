function postedBy(parent, args, context) {
    return context.prisma.appointment({ id: parent.id }).postedBy()
  }
  
module.exports = {
    postedBy,
}