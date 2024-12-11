import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-lg font-semibold mb-4">Footer Title</h2>

        <table className="min-w-full bg-gray-700">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-600">Header 1</th>

              <th className="py-2 px-4 border-b border-gray-600">Header 2</th>

              <th className="py-2 px-4 border-b border-gray-600">Header 3</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="py-2 px-4 border-b border-gray-600">Data 1</td>

              <td className="py-2 px-4 border-b border-gray-600">Data 2</td>

              <td className="py-2 px-4 border-b border-gray-600">Data 3</td>
            </tr>

            <tr>
              <td className="py-2 px-4 border-b border-gray-600">Data 4</td>

              <td className="py-2 px-4 border-b border-gray-600">Data 5</td>

              <td className="py-2 px-4 border-b border-gray-600">Data 6</td>
            </tr>

            <tr>
              <td className="py-2 px-4 border-b border-gray-600">Data 7</td>

              <td className="py-2 px-4 border-b border-gray-600">Data 8</td>

              <td className="py-2 px-4 border-b border-gray-600">Data 9</td>
            </tr>
          </tbody>
        </table>

        <div className="mt-4 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
