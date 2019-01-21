function postedBy(parent, args, context) {
  return context.prisma.link({ id: parent.id }).posedBy()
}

module.exports = {
  postedBy,
}
