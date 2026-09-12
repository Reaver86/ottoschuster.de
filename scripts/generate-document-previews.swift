import AppKit
import PDFKit
// Run from the repository root: swift scripts/generate-document-previews.swift
// Uses macOS PDFKit to render the first page of each listed example.
let root = URL(fileURLWithPath: FileManager.default.currentDirectoryPath)
let source = try String(contentsOf: root.appendingPathComponent("src/data/prices.ts"), encoding: .utf8)
let pattern = try NSRegularExpression(pattern: #"example\("([^"]+\.pdf)""#)
let filenames = Set(pattern.matches(in: source, range: NSRange(source.startIndex..., in: source)).map {
    String(source[Range($0.range(at: 1), in: source)!])
})
let output = root.appendingPathComponent("public/images/document-previews")
try FileManager.default.createDirectory(at: output, withIntermediateDirectories: true)
let files = try FileManager.default.contentsOfDirectory(at: root.appendingPathComponent("public/documents/examples"), includingPropertiesForKeys: nil)
for file in files where filenames.contains(file.lastPathComponent) {
    guard let pdf = PDFDocument(url: file), let page = pdf.page(at: 0) else { fatalError("Cannot read \(file)") }
    let bounds = page.bounds(for: .mediaBox)
    let size = NSSize(width: 320, height: 320 * bounds.height / bounds.width)
    let thumbnail = page.thumbnail(of: size, for: .mediaBox)
    guard let tiff = thumbnail.tiffRepresentation, let bitmap = NSBitmapImageRep(data: tiff), let jpeg = bitmap.representation(using: .jpeg, properties: [.compressionFactor: 0.8]) else { fatalError("Cannot render \(file)") }
    try jpeg.write(to: output.appendingPathComponent(file.deletingPathExtension().lastPathComponent + ".jpg"))
}
print("Rendered PDF previews")
