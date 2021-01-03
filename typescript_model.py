class TypescriptModel():
    def __init__(self, name):
        self.name = name
        self.properties = []

    def push_property(self, prop_line):
        self.properties.append(prop_line)
